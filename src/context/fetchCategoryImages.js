export default async ({ params }) => {
    const query = `https://api.unsplash.com/topics/${
        params.categoryName
    }/photos?client_id=${
        import.meta.env.VITE_ACCESS_KEY
    }&per_page=20&page=1&order_by=popularity`;
    let data = await fetch(query);
    data = await data.json();
    return data;
};
