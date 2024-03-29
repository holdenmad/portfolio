//TODO: Do further styling for images, etc.

function BlogLayout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        h2 {
          font-size: x-large;
        }
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
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }
        hr {
          height: 0.5rem;
          width: 100%;
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          border: none;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}

export default BlogLayout;
