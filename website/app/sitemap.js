const homepage = "https://www.newestbio.com";

export default async function sitemap() {
  const blogs = await fetch("https://www.newestbio.com/blogs");
  const data = await blogs.json();

  const posts = data.map((post) => ({
    url: `${homepage}/blogs/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  const routes = ["", "/about", "/products", "/contact", "/blogs"].map((route) => ({
    url: `${homepage}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}