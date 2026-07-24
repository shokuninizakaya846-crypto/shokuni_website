// Ticket badge: one unified SVG path with concave notches on the divider
const R = 10;   // outer corner radius
const N = 9;    // notch radius
const H = 40;   // height
const SQ = 40;  // left square width
const GAP = 6;  // gap between the two parts

export default function TicketBadge({ text = "The Sound" }) {
  const textWidth = text.length * 8 + 28;
  const totalW = SQ + GAP + textWidth;
  const rX = SQ + GAP;

  const ny1 = H / 2 - N;
  const ny2 = H / 2 + N;

  const leftPath = `
    M ${R} 0
    L ${SQ} 0
    L ${SQ} ${ny1}
    A ${N} ${N} 0 0 1 ${SQ} ${ny2}
    L ${SQ} ${H}
    L ${R} ${H}
    Q 0 ${H} 0 ${H - R}
    L 0 ${R}
    Q 0 0 ${R} 0
    Z
  `;

  const rightPath = `
    M ${rX} 0
    L ${totalW - R} 0
    Q ${totalW} 0 ${totalW} ${R}
    L ${totalW} ${H - R}
    Q ${totalW} ${H} ${totalW - R} ${H}
    L ${rX} ${H}
    L ${rX} ${ny2}
    A ${N} ${N} 0 0 1 ${rX} ${ny1}
    L ${rX} 0
    Z
  `;

  return (
    <div
      className="relative inline-flex items-center"
      style={{ height: `${H}px`, width: `${totalW}px` }}
    >
      <svg
        className="absolute inset-0"
        width={totalW}
        height={H}
        viewBox={`0 0 ${totalW} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="white" d={leftPath} />
        <path fill="white" d={rightPath} />
      </svg>

      {/* Left square — icon */}
      <div className="relative flex items-center justify-center" style={{ width: `${SQ}px`, height: `${H}px`, flexShrink: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 119.03" style={{ width: "36px", height: "36px" }}>
          <path d="M58.43,30.99c-.25-.19-.54-.28-.86-.28h0c-.28,0-.54.11-.89.38-.08.06-.15.14-.22.22-.42.54-.32,1.32.23,1.75,7.16,5.46,11.52,12.82,12.96,21.89.31,1.92.46,3.61.46,5.02s-.15,3.1-.46,5.03c-1.44,9.06-5.8,16.43-12.96,21.9-.08.06-.15.13-.22.22-.21.26-.3.59-.26.92.04.33.21.62.47.83.25.19.52.37.82.37h.06s.04,0,.05,0h.12c.26-.04.5-.13.7-.28,9.08-6.83,14.28-17.4,14.27-28.98,0-11.58-5.21-22.14-14.29-28.97Z" />
          <path d="M48.92,41.88c-.46-.37-1.14-.34-1.57.07l-.28.27s-.09.1-.13.15c-.18.24-.26.54-.21.84.05.3.2.56.44.73,4.89,3.67,7.93,9.84,7.92,16.09,0,6.26-3.05,12.42-7.95,16.09-.05.04-.1.08-.14.13-.43.45-.41,1.17.04,1.6l.29.27c.22.21.51.32.82.32.26,0,.53-.09.74-.26,5.78-4.54,8.85-10.81,8.86-18.15,0-7.33-3.05-13.61-8.82-18.16Z" />
          <path d="M39.59,55.83l-.28-.27-.04-.04-.32-.32h-.01c-1.1-.93-2.52-1.44-3.97-1.41-1.62.02-3.15.68-4.3,1.84-1.15,1.16-1.79,2.7-1.8,4.32,0,1.63.62,3.15,1.77,4.28,1.12,1.11,2.62,1.72,4.21,1.72h.09c1.62-.03,3.15-.68,4.3-1.84,1.15-1.16,1.79-2.7,1.8-4.32,0-1.48-.51-2.86-1.46-3.96h.01ZM38.3,59.88c0,1.84-1.5,3.35-3.35,3.35s-3.35-1.5-3.35-3.35,1.5-3.35,3.35-3.35,3.35,1.5,3.35,3.35Z" />
        </svg>
      </div>

      {/* Gap */}
      <div style={{ width: `${GAP}px`, flexShrink: 0 }} />

      {/* Right — text */}
      <div
        className="relative flex items-center"
        style={{
          width: `${textWidth}px`,
          height: `${H}px`,
          paddingLeft: "14px",
          paddingRight: "14px",
          fontFamily: "'Google Sans Code', monospace",
          fontSize: "13px",
          color: "#2a2622",
          whiteSpace: "nowrap",
          fontWeight: "100",
        }}
      >
        {text}
      </div>
    </div>
  );
}