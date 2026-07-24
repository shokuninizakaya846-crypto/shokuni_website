const STYLES = `
  @keyframes dot1Anim {
    0%    { transform: scale(1);    opacity: 1; }
    60%   { transform: scale(1);    opacity: 1; }
    60.5% { transform: scale(0);    opacity: 0; }
    74%   { transform: scale(0);    opacity: 0; }
    74.5% { transform: scale(1.25); opacity: 1; }
    76%   { transform: scale(0.95); opacity: 1; }
    77%   { transform: scale(1);    opacity: 1; }
    100%  { transform: scale(1);    opacity: 1; }
  }
  @keyframes dot2Anim {
    0%    { transform: scale(1);    opacity: 1; }
    54%   { transform: scale(1);    opacity: 1; }
    54.5% { transform: scale(0);    opacity: 0; }
    78%   { transform: scale(0);    opacity: 0; }
    78.5% { transform: scale(1.3);  opacity: 1; }
    80%   { transform: scale(0.95); opacity: 1; }
    81%   { transform: scale(1);    opacity: 1; }
    100%  { transform: scale(1);    opacity: 1; }
  }
  @keyframes dot3Anim {
    0%    { transform: scale(1);    opacity: 1; }
    48%   { transform: scale(1);    opacity: 1; }
    48.5% { transform: scale(0);    opacity: 0; }
    82%   { transform: scale(0);    opacity: 0; }
    82.5% { transform: scale(1.3);  opacity: 1; }
    84%   { transform: scale(0.95); opacity: 1; }
    85%   { transform: scale(1);    opacity: 1; }
    100%  { transform: scale(1);    opacity: 1; }
  }
`;

export default function NavLogo() {
  return (
    <>
      <style>{STYLES}</style>
      <svg width="74" height="33" viewBox="0 -6 93 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[67px] md:w-[74px]">
        {/* M — static */}
        <path
          d="M31.9224 30.0076C31.8368 28.6352 31.6967 23.6623 30.25 23.3091C28.7201 22.937 26.7437 28.602 26.2876 29.8867L25.0618 33.3521C24.2161 35.7389 22.2445 37.301 19.8333 37.391C17.4506 37.4787 15.1773 36.149 14.2888 33.7574L12.1675 28.0379C11.6829 26.7295 10.3241 23.1646 8.93674 23.1456C7.54943 23.1266 7.2905 27.5449 7.22636 28.6755C7.08858 31.1998 7.45204 36.7108 3.69395 36.9099C0.881326 37.0568 -0.00237075 33.9897 4.77402e-06 31.4392L0.0356377 5.25942C0.0356377 3.58599 0.734043 1.71821 2.19024 0.936012C4.71305 -0.417422 7.9509 -0.301278 10.3122 1.27259C11.557 2.10219 12.31 3.64051 12.7661 5.05083L16.5883 16.843C17.1157 18.4714 18.1942 21.5907 19.9283 21.8277C21.4629 22.0387 22.7124 19.1422 23.1543 17.7959L27.5846 4.27812C29.0717 -0.256242 34.6328 -0.806149 37.5357 0.936012C38.8708 1.73717 39.6618 3.40111 39.6642 5.07927L39.6713 33.4611C39.6713 34.7055 38.6689 35.8337 37.9871 36.3742C37.0582 37.1113 35.4476 37.3294 34.4072 36.7795C32.9296 35.9973 32.205 34.4542 32.1029 32.8235L31.9271 30.0099L31.9224 30.0076Z"
          fill="#E8FF70"
        />
        {/* Dot 1 — large */}
        <ellipse
          cx="54.7938" cy="11.3811" rx="10.243" ry="11.3811"
          fill="#E8FF70"
          style={{
            transformOrigin: "54.7938px 11.3811px",
            animation: "dot1Anim 2.5s cubic-bezier(0.34,1.56,0.64,1) infinite",
          }}
        />
        {/* Dot 2 — medium */}
        <ellipse
          cx="74.627" cy="7.47902" rx="6.66608" ry="7.47902"
          fill="#E8FF70"
          style={{
            transformOrigin: "74.627px 7.47902px",
            animation: "dot2Anim 2.5s cubic-bezier(0.34,1.56,0.64,1) infinite",
          }}
        />
        {/* Dot 3 — small */}
        <ellipse
          cx="88.6086" cy="4.87762" rx="4.38986" ry="4.87762"
          fill="#E8FF70"
          style={{
            transformOrigin: "88.6086px 4.87762px",
            animation: "dot3Anim 2.5s cubic-bezier(0.34,1.56,0.64,1) infinite",
          }}
        />
      </svg>
    </>
  );
}