import fs from 'fs';
import path from 'path';

// 1. Move [slug].astro to components/ProductPage.astro and patch it
let productPageCode = fs.readFileSync('src/pages/[slug].astro', 'utf-8');
productPageCode = productPageCode.replace(
  /export const getStaticPaths[\s\S]*?const product = getProductBySlug\(slug!\);/m,
  `const { product } = Astro.props;`
);
productPageCode = productPageCode.replace(
  `import Navbar from "../components/Navbar.astro";`,
  `import Navbar from "./Navbar.astro";`
);
productPageCode = productPageCode.replace(
  `import Footer from "../components/Footer.astro";`,
  `import Footer from "./Footer.astro";`
);
productPageCode = productPageCode.replace(
  `import ProductCard from "../components/ProductCard.astro";`,
  `import ProductCard from "./ProductCard.astro";`
);
productPageCode = productPageCode.replace(
  `import { products, getProductBySlug } from "../data/products";`,
  `import { products } from "../data/products";`
);
fs.writeFileSync('src/components/ProductPage.astro', productPageCode);
fs.unlinkSync('src/pages/[slug].astro');

// 2. Move blog/[slug].astro to components/BlogPage.astro and patch it
let blogPageCode = fs.readFileSync('src/pages/blog/[slug].astro', 'utf-8');
blogPageCode = blogPageCode.replace(
  /export async function getStaticPaths[\s\S]*?const { post } = Astro\.props;/m,
  `const { post } = Astro.props;`
);
blogPageCode = blogPageCode.replace(
  `import BaseLayout from "../../layouts/BaseLayout.astro";`,
  `import BaseLayout from "../layouts/BaseLayout.astro";`
);
blogPageCode = blogPageCode.replace(
  `import Navbar from "../../components/Navbar.astro";`,
  `import Navbar from "./Navbar.astro";`
);
blogPageCode = blogPageCode.replace(
  `import Footer from "../../components/Footer.astro";`,
  `import Footer from "./Footer.astro";`
);
// Fix the internal breadcrumb link back to blog
blogPageCode = blogPageCode.replace(/href="\/blog"/g, 'href="/blog"'); // this stays the same

fs.writeFileSync('src/components/BlogPage.astro', blogPageCode);
fs.unlinkSync('src/pages/blog/[slug].astro');

// 3. Create the Master Router at src/pages/[slug].astro
const routerCode = `---
import { getCollection } from "astro:content";
import { products } from "../data/products";
import ProductPage from "../components/ProductPage.astro";
import BlogPage from "../components/BlogPage.astro";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  
  const blogPaths = posts.map(post => ({
    params: { slug: post.id },
    props: { type: 'blog', item: post },
  }));
  
  const productPaths = products.map(p => ({
    params: { slug: p.slug },
    props: { type: 'product', item: p },
  }));
  
  return [...blogPaths, ...productPaths];
}

const { type, item } = Astro.props;
---
{type === 'product' ? <ProductPage product={item} /> : <BlogPage post={item} />}
`;
fs.writeFileSync('src/pages/[slug].astro', routerCode);

// 4. Update the Blog Index to remove /blog/ from URLs
let blogIndexCode = fs.readFileSync('src/pages/blog/index.astro', 'utf-8');
blogIndexCode = blogIndexCode.replace(/href=\{\`\/blog\/\$\{post\.id\}\`\}/g, "href={`/${post.id}`}");
fs.writeFileSync('src/pages/blog/index.astro', blogIndexCode);

console.log("Migration complete!");
