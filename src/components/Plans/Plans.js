import React, {useEffect, useState} from "react";
import './Plans.css';
import {db} from "../../firebase";
import {collection, getDocs, query, where, addDoc, onSnapshot} from 'firebase/firestore'
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import {loadStripe} from "@stripe/stripe-js";

const Plans = () => {
    const  [products, setProducts] = useState(null);
    const user = useSelector(selectUser);

    useEffect(     () =>  {
        async function fetchProducts(){
            const q = query(collection(db, "products"), where('active','==', true));
            const querySnapshot = await getDocs(q);

            const products = {};
            querySnapshot?.forEach( async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const q2 = query(collection(productDoc.ref, 'prices'));
                const priceSnap = await getDocs(q2);
                priceSnap?.forEach((price) => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                });
                setProducts(products);
            });
        }
        fetchProducts().catch((err) => {
            console.log(err)})
    }, [])

    console.log(products)

    const loadCheckout = async (priceId) => {
        // const ref = doc(db, 'customers', user.uid,'checkout_sessions');

        const docRef = await addDoc(collection(db, 'customers', user.uid,'checkout_sessions'), {
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        });

        onSnapshot(docRef, async (snap) => {
            const {error, sessionId} = snap.data();

            if(error){
                alert('error occurred: ' + error.message);
            }

            if(sessionId){
                const stripe = await loadStripe('pk_test_51LybKBHeXG6aDv3kxgUKT7eCwRhvh2quAa2vazqs9ZuFYrGOXhrQkMGAADp23xKNqTeBj3AGSpjvMWxrmXCjrCxH00ysBP7rO2');
                await stripe.redirectToCheckout({sessionId});
            }
        })
    }

    return <div className={'plans'}>
        <h3>Plans</h3>
        {products ? Object.entries(products)?.map( ([productData]) => {
            return <div className={'plan'}>
               <div className="plan__info">
                   <h5>{productData.name}</h5>
                   <h6>{productData.description}</h6>
               </div>

                <button className={'plan__sub'} onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
            </div>
        }) : null}
    </div>
}

export default Plans;