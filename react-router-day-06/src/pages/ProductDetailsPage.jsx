import { useParams, useNavigate } from "react-router-dom"

const ProductDetailsPage = ()  => {
    const {id} = useParams()
    const navigate = useNavigate()
    return (<>
        <h1>Product Profile:{id}</h1>
        <button onClick={() => navigate('/products')}>Go to Products</button>
    </>)
}

export default ProductDetailsPage