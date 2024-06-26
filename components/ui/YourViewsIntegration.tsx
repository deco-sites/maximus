import { Head } from "$fresh/runtime.ts";

function YourViewsIntegration() {
  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
        
        <script
          id="_yvsrc"
          async
          src="//service.yourviews.com.br/script/ae97f62a-00ed-4eb7-8fbf-024f90f5ff8a/yvapi.js"
        >
        </script>

        <script 
          type="text/javascript" 
          async 
          src="//d335luupugsy2.cloudfront.net/js/loader-scripts/ddba0c19-400d-4ae3-8b26-69cdfa4c9d5c-loader.js">
        </script>
      </Head>
    </>
  );
}

export default YourViewsIntegration;
