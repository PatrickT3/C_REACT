import {RiDownloadCloudFill} from 'react-icons/ri';
import './Bt.css';

const DownloadButton = () => {
  const handleDownload = () => {
    const conteudoDoArquivo = "Arquivo aleatório!!";
    const blob = new Blob([conteudoDoArquivo], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "arquivo.txt"; // Nome do arquivo a ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
    return  <button onClick={handleDownload} className='btn-link'>
              <span> Download CV </span>
              <RiDownloadCloudFill></RiDownloadCloudFill>
            </button>;
  };
  
  export default DownloadButton;