import NetflixMainComponent from "../NetflixMainComponent.js";
import NetflixFooterComponent from "./NetflixFooterComponent.js";
import NetflixHeader from "./NetflixHeader.js";
import NetflixRegisterComponent from "./NetflixRegisterComponent.js";


export default function NetflixIndex(){
    return(
        <>
           <div className="container-fluid">
            <div className="box">
                <header>
                <NetflixHeader></NetflixHeader>
                </header>

                <section className="d-flex align-items-center justify-content-center">
                    <main>
                        <NetflixMainComponent/>
                        <NetflixRegisterComponent/>
                       
                    </main>
                </section>

                <footer className="m-2 p-2">
                <NetflixFooterComponent/>
                </footer>
           
            </div>
          
        </div>
        
        </>
    )
}