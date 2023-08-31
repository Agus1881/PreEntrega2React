

export const ItemDetail = ({singleProduct}) => (
    <div>
        <h1>{singleProduct.nombre}</h1>
        <img src={singleProduct.imagen} alt="" />
        <div>{singleProduct.stock}</div>
    </div>
)