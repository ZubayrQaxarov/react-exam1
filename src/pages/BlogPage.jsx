import BlogSection from "../components/BlogSection/BlogSection";

const BlogPage = ({ data }) => {
  const { blog } = data;

  return (
    <div className="page">
      <div className="pageHead">
        <div className="container">
          <div className="pageTitle">Blog</div>
          <div className="pageSub">Latest articles and tips</div>
        </div>
      </div>

      <BlogSection title={blog.title} posts={blog.posts} />
    </div>
  );
};

export default BlogPage;
