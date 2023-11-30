const js = () => {
  const init = () => {
    const node = document.createElement("script");

    node.id = "_yvsrc";
    node.defer = true;
    node.src =
      "//service.yourviews.com.br/script/ae97f62a-00ed-4eb7-8fbf-024f90f5ff8a/yvapi.js";

    document.head.appendChild(node);
  };

  addEventListener(
    "load",
    () =>
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(() => setTimeout(init, 5_500))
        : init(),
  );
};

function YourViewsIntegration() {
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: `(${js})()` }}
      />
    </>
  );
}

export default YourViewsIntegration;
