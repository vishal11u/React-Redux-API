import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, fetchSomeData  } from '../SliceRedux';
import Swal from 'sweetalert2';

const CardRedux = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchSomeData())
      .then((result) => {
        setProduct(result.payload); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [dispatch]);


  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAdd = (item) => {
    if (!isProductInCart(item.id)) {
      dispatch(add(item));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product Added',
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Product Already in Cart',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory ? product.filter((item) => item.category === selectedCategory) : product;

  return (
    <div>
      <div className='bg-gray-200'>
        <div className='text-center text-3xl md:text-[50px] pt-5 md:pt-8 md:pb-5 font-semibold'>
          <h1>All Product's</h1>
        </div>

        <div className="flex justify-center md:gap-7 my-3">
          <button className={`text-[12px] mx-2 px-1 md:text-[14px] md:px-4 md:py-2 mr-2 ${selectedCategory === '' ? 'bg-gray-600 text-white' : 'bg-gray-300'} rounded`} onClick={() => handleCategoryChange('')} > All </button>
          <button className={`text-[12px] mx-2 px-1 md:text-[14px] md:px-4 md:py-2 ${selectedCategory === 'electronics' ? 'bg-gray-600 text-white' : 'bg-gray-300'} rounded`} onClick={() => handleCategoryChange('electronics')}  >  Electronics </button>
          <button className={`text-[12px] mx-2 px-1 md:text-[14px] md:px-4 md:py-2 ${selectedCategory === `men's clothing` ? 'bg-gray-600 text-white' : 'bg-gray-300'} rounded`} onClick={() => handleCategoryChange(`men's clothing`)}  >  men's clothing  </button>
          <button className={`text-[12px] mx-2 px-1 md:text-[14px] md:px-4 md:py-2 ${selectedCategory === `women's clothing` ? 'bg-gray-600 text-white' : 'bg-gray-300'} rounded`} onClick={() => handleCategoryChange(`women's clothing`)} >  women's clothing </button>
          <button className={`text-[12px] mx-2 px-1 md:text-[14px] md:px-4 md:py-2 ${selectedCategory === 'jewelery' ? 'bg-gray-600 text-white' : 'bg-gray-300'} rounded`} onClick={() => handleCategoryChange('jewelery')}  >  jewelery </button>
        </div>

        {loading ? (
          <div className="text-center font-semibold md:text-[20px] py-8">
            Loading...
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-4 pb-8 w-full lg:px-12' >
            {
              filteredProducts.map((item) => (
                <div className='shadow-lg border rounded-md text-center w-[45vw] mt-5 mx-1.5 md:w-[22vw] lg:w-[19vw] md:mx-3 md:mt-7 bg-white transition-all hover:scale-[1.1]' key={item.id}>
                  <div className=''>
                    <p className='uppercase text-[12px] font-semibold text-gray-600 w-full rounded md:py-2 bg-gray-300'>{item.category}</p>
                    <img className='lg:h-[25vh] lg:w-[10.5vw] md:w-[15vw] flex w-[30vw] h-[18vh] ml-[19%]  lg:ml-[25%] p-3' src={item.image} alt='img' />
                    <h1 className='md:text-[15px] text-[10px] px-1 font-semibold py-1 md:px-2'>{item.title}</h1>
                    <p className='md:py-1 text-sm font-semibold '>₹{item.price}</p>
                    <div className='flex py-1 justify-center gap-2 lg:gap-5'>
                      <button className='px-2 py-1 mt-1 text-[10px] md:text-base bg-gray-600 text-white rounded-md transition-all' onClick={() => handleAdd(item)}>Add to Cart</button>
                    </div>
                    <p className='py-1 text-sm'>Rating: ⭐{item.rating.rate}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRedux;
