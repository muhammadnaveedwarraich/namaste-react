// createing react element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hellow from heading"
);
const heading1 = React.createElement(
  "h1",
  { id: "heading1" },
  "Hellow from headig  1"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "Hellow from headig  2"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// create a dom element

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element into the root and reder into chrom
root.render([heading, container]);
