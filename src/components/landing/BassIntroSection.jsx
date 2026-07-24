export default function BassIntroSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center overflow-hidden hidden"
      style={{
        backgroundImage: "url('https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/2372d367a_Mala_8.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "6vw",
        height: "100vh"
      }}>
      
      <h2
        className="font-heading font-normal leading-[0.8] mb-20 py-4"
        style={{ fontSize: "80px", letterSpacing: "-0.04em", color: "#ffffff" }}>
        
        Bass you can
        <br />
        <span>breathe</span>
      </h2>
      <div className="relative w-full mb-8">
        <p
          className="font-body font-light text-white leading-relaxed"
          style={{ fontSize: "14px", maxWidth: "300px", textAlign: "left" }}>
          
          A dual-driver acoustic engine that moves air more efficiently than
          anything in its class. It's deep, distortion-free, and shockingly
          powerful.
        </p>
      </div>
    </section>);

}