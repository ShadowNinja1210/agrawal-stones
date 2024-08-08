export default function GMap({ mapUrl }: { mapUrl: string }) {
  return (
    <div className=" w-full overflow-hidden max-w-[400px] h-[300px]">
      <div id="my-map-canvas" style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
        <iframe style={{ height: "100%", width: "100%", border: 0 }} src={mapUrl}></iframe>
      </div>
      <style jsx>{`
        #my-map-canvas .text-marker {
        }
        .map-generator {
          max-width: 100%;
          max-height: 100%;
          background: none;
        }
      `}</style>
    </div>
  );
}
