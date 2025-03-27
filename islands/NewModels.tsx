export default function RolexNewModels() {
  return (
    <>
      <script id="rlx-corner" dangerouslySetInnerHTML={{
        __html: `
          (function(b,c,a,d,f,g,h,k,l) {
            var e = c.getElementsByTagName(a)[0];
            a = c.createElement(a);
            var m = function(a) {
              delete b[d];
              a(c.getElementById(f),[g,k,h,l])
            };
            b[d] = b[d] || m;
            a.async = true;
            a.src = "https://corners.rolex.com/rlx-corner.js";
            e.parentNode.insertBefore(a,e)
          })(window,document,"script","rlxCornerCallback","rlx-corner","UNIQUE API KEY","","en","new-watches-2023");
        `
      }} />
    </>
  );
}