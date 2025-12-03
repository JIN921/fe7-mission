import { useRef, useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [listdata, setListData] = useState();
  const [renderingData, setRenderingData] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState();

  const loaderRef = useRef();

  console.log(listdata);

  function loadMoreList() {
    if (page >= listdata.length) return;
    setLoading(true);

    const nextData = listdata.slice(page, page + 10);
    setRenderingData((prev) => [...prev, ...nextData]);
    setPage((prev) => prev + 10);
    setLoading(false);
  }

  // api 함수 호출
  useEffect(() => {
    async function loadData() {
      const response = await fetchData();
      setListData(response);
      setRenderingData(response.slice(0, 10));
    }
    loadData();
  }, []);

  // Intersection Observer 설정
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
          loadMoreList();
        }
      },
      { threshold: 1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading, renderingData]);

  return (
    <div style={{ padding: 10 }}>
      {renderingData.map((item) => (
        <div key={item.id}>
          <h2>
            {item.id}. {item.title}
          </h2>
          <p>{item.body}</p>
        </div>
      ))}

      {loading && <p>로딩 중...</p>}

      <div ref={loaderRef} style={{ height: "20px" }} />
    </div>
  );
}

// data fetch 함수
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error();
    else {
      return await response.json();
    }
  } catch (err) {
    console.error(err);
    return [];
  }
}
