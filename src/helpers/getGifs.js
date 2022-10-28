export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=1NT9ZQ8A1nR2Dw24M6CdPaeFzegPsarV&q=${category}&limit=10`;
  console.log(url);
  const resp = await fetch(url);
  // console.log(resp);
  const { data } = await resp.json();
  // console.log(data);
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  // console.log(gifs);
  return gifs;
};
