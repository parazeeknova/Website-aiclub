import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import pdf1 from "/Magazines/Edition_1.pdf";
import pdf2 from "/Magazines/Edition_2.pdf";
import pdf3 from "/Magazines/AIC_Edition3.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "./magazine.css";
import backBut from '../../assets/backBut.webp' 
// import GooeyCursor from "../Gooey Cursor/gooeyCursor.jsx";
import Cursor from "../Cursor/cursor";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function BackButton(props) {
  useEffect(()=>{
      if (props.top) {
          document.getElementById('backButtonWrap').style.top = props.top
      }
      if (props.left) {
          document.getElementById('backButtonWrap').style.left = props.left
      }
      if (props.filter) {
          document.getElementById('backButtonWrap').style.filter = props.filter
      }
      if (props.color) {
          document.getElementById('backtxt').style.color = props.color
      }
      if (!props.textDisplay) {
          document.getElementById('backtxt').style.display = 'none'
      }
      if (props.data) {
          document.getElementById('backtxt').innerText = props.data
      }
      
  },[])
return (
  <div onClick={()=>window.location.href='/'} id='backButtonWrap' className='backButtonWrap'>
    <img src={backBut} alt="" srcset="" />
    <h5 id='backtxt' >Back</h5>
  </div>
)
}

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {/* <h1>Page Header</h1> */}
      {/*eslint-disable-next-line react/prop-types*/}
      <div>{props.children}</div>
    </div>
  );
});

Pages.displayName = "Pages";

function Flipbook() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const book = useRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log("loaded");
    
    // const elementsWithClass = document.getElementsByClassName("react-pdf__Page__canvas");
    // for (let element of elementsWithClass) {
    //   element.style.width = "400px";
    //   element.style.height = "550px";
    // }
  };

  const goToPrevPage = () => {
    if (book.current && pageNumber > 1) {
      book.current.pageFlip().flipPrev();
      setPageNumber(prevPageNumber => prevPageNumber - 2);
    }
  };

  const goToNextPage = () => {
    if (book.current && pageNumber < numPages) {
      book.current.pageFlip().flipNext();
      setPageNumber(prevPageNumber => prevPageNumber + 2);
    }
  };

  const onFlip = (e) => {
    setPageNumber(e.data + 1);
  };

  const [pdf, setPdf] = useState(pdf3);

  const handleButtonClick1 = () => {
    setPdf(pdf1);
  };

  const handleButtonClick2 = () => {
    setPdf(pdf2);
  };
  const handleButtonClick3 = () => {
    setPdf(pdf3);
  };

  return (
    <>
      {/* <GooeyCursor></GooeyCursor> */}
      <Cursor></Cursor>
      <BackButton data='Visit Main Site' top="10px" textDisplay={true} filter='invert(1)' ></BackButton>
      <div className="magazineWrap">
        {/* <div id="magLoader">
          Loading Magazine
        </div> */}
        <div className="flipbook-container">
          <div className="nav-bar">
            <div className="previousButton">
              <button onClick={goToPrevPage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                  <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="middleButton">
              <span>{pageNumber}</span>
              <div className="middleSymbol">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                  <path d="M21 4C11.0535 4 12.9465 20 3 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>{numPages}</span>
            </div>
            <div className="nextButton">
              <button onClick={goToNextPage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                  <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mag-container">
          <HTMLFlipBook ref={book} width={350} height={500} showCover={true} onFlip={onFlip} >
            {[...Array(numPages).keys()].map((n) => (
              <Pages key={n} number={`${n + 1}`}>
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                    pageNumber={n + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    width={350}
                    className="border-3 border-black"
                  />
                </Document>
              </Pages>
            ))}
          </HTMLFlipBook>
        </div>

        <div className="bottom-bar">
          <div className="dropdown">
            <button className="dropbtn">Change Edition</button>
            <div className="dropdown-content">
              <button className="edition" onClick={handleButtonClick1}>Edition 1</button>
              <button className="edition" onClick={handleButtonClick2}>Edition 2</button>
              <button className="edition" onClick={handleButtonClick3}>Edition 3</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Flipbook;