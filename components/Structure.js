import Navbar from './Navbar';

export default function Structure({ children }){
    return (
        <div className="mx-6 md:max-w-2xl md:mx-auto font-Raleway">
            <Navbar />
            <main>{children}</main>
        </div>
    );
}