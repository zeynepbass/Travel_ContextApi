import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Plans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        // Burada plans endpoint'i veya veritabanından seyahat planlarını getiren bir API çağrısı yapılabilir.
        // Bu örnekte mock data kullanarak plans state'ini dolduralım.

        const fetchPlans = async () => {
            try {
                // Örnek olarak JSONPlaceholder'dan bir endpoint kullanabiliriz.
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

                // Gelen veriyi plans state'ine set ediyoruz.
                setPlans(response.data.slice(0, 5)); // İlk 5 planı alalım
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchPlans();
    }, []);

    return (
        <div>
            <h2>Travel Plans</h2>
            {plans.length === 0 ? (
                <p>Loading plans...</p>
            ) : (
                <ul>
                    {plans.map((plan) => (
                        <li key={plan.id}>
                            <h3>{plan.title}</h3>
                            <p>{plan.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Plans;
