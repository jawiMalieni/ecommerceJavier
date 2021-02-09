import { Breadcrumb } from 'react-bootstrap';


const FooterComponent = () => {
    return (
        <>
            <div>Todos los derechos reservados</div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Productos
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Contacto</Breadcrumb.Item>
            </Breadcrumb>




        </>
    );
}
export default FooterComponent;
