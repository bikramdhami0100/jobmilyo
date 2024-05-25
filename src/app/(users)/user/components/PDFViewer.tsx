

const PdfViewer = ({ url }:any) => (
  <PdfViewer
    document={{
      url: url,
    }}
  />
);

export default function Home() {
  return <PdfViewer url="https://res.cloudinary.com/dii2xg262/image/upload/v1716575411/jobmilyo/Cryptography_compressed-1_ad6dq9.pdf" />;
}
