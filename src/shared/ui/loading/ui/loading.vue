<template>
  <div class="loading">
    <div><div><div><div><div><div>
    </div></div></div></div></div></div>
  </div>
</template>

<style lang="scss">
.loading{
  position:relative;
  width:4px;
  padding-bottom:20px;
}
.loading div {
  position:absolute;
  top:0; left:0;
  width:100%; height:100%;

  -webkit-animation: rotate 1.5s infinite;
  -moz-animation: rotate 1.5s infinite;
  -o-animation: rotate 1.5s infinite;
  animation: rotate 1.5s infinite;

  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}
.loading {
  -webkit-animation: rotate2 1.5s infinite;
  -moz-animation: rotate2 1.5s infinite;
  -o-animation: rotate2 1.5s infinite;
  animation: rotate2 1.5s infinite;

  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}
.loading:before, .loading div:before {
  content:'';
  position:absolute;
  top:0; left:0;
  width:100%; padding-bottom:100%;
  border-radius: 100%;
  background:#fff;
}
@-webkit-keyframes rotate {
  0%   { -webkit-transform : rotate(0deg);}
  50%  { -webkit-transform : rotate(60deg);}
}
@-moz-keyframes rotate {
  0%   { -moz-transform : rotate(0deg);}
  50%  { -moz-transform : rotate(60deg);}
}
@-o-keyframes rotate {
  0%   { -o-transform : rotate(0deg);}
  50%  { -o-transform : rotate(60deg);}
}
@keyframes rotate {
  0%   { transform : rotate(0deg);}
  50%  { transform : rotate(60deg);}
}


@-webkit-keyframes rotate2 {
  50%  { -webkit-transform : rotate(0deg); }
  100% { -webkit-transform : rotate(360deg); }
}
@-moz-keyframes rotate2 {
  50%  { -moz-transform : rotate(0deg); }
  100% { -moz-transform : rotate(360deg); }
}
@-o-keyframes rotate2 {
  50%  { -o-transform : rotate(0deg); }
  100% { -o-transform : rotate(360deg); }
}
@keyframes rotate2 {
  50%  { transform : rotate(0deg); }
  100% { transform : rotate(360deg); }
}
</style>