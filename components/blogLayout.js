function BlogLayout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        h2 a,
        div a {
          font-family: Courier, monospace;
          background-color: black;
          color: white;
          padding-right: 0.2rem;
          padding-left: 0.2rem;
        }

        a:hover {
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab
          );
          background-size: 400% 400%;
          animation: gradient 5s ease infinite;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default BlogLayout;
