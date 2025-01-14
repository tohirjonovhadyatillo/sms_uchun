import React, { useState } from 'react';
import "../styles/App.css";

const VipSMSNumberSender = () => {
    const [phone, setPhone] = useState('');
    const [count, setCount] = useState(1); // default value set to 1
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Telefon raqami va sonni tekshirish
        if (!/^\+?[0-9]{10,15}$/.test(phone)) {
            setError('Iltimos, telefon raqamingizni to\'g\'ri kiriting.');
            return;
        }

        if (count < 1 || count > 50) {
            setError('Son 1 dan 50 gacha bo\'lishi kerak.');
            return;
        }

        setError('');
        
        // Tugmani faollashtirishni o'chirib, 40 soniya kutamiz
        setIsButtonDisabled(true);
        sendSMS(phone, count);

        // 40 soniya kutishdan so'ng tugmani qayta faollashtirish
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 40000); // 40 soniya = 40000 millisekund
    };

    const sendSMS = (phone, count) => {
        const url = 'https://jsonplaceholder.typicode.com/posts';  // o'zgartirilgan URL

        // Sonni hisoblab, har bir SMS yuborish
        for (let i = 0; i < count; i++) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: phone,
                    count: count
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('SMS yuborildi:', data);
                    alert(`SMS yuborildi: ${data.message || 'Muvaffaqiyatli'}`);
                })
                .catch((error) => {
                    console.error('Xato:', error);
                    alert('Xatolik yuz berdi.');
                });
        }
    };

    return (
        <div className="form-container">
            <h2>Telefon raqam va SMS yuborish</h2>
            <form onSubmit={handleSubmit}>
                {/* Telefon raqam input */}
                <input
                    className="input"
                    type="text"
                    placeholder="Telefon raqamingizni kiriting"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                {/* Son input (1 dan 50 gacha) */}
                <input
                    className="input"
                    type="number"
                    placeholder="1 dan 50 gacha son kiriting"
                    value={count}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                    min="1"
                    max="50"
                    required
                />
                {/* Error message */}
                {error && <div className="error">{error}</div>}

                {/* Submit button */}
                <button
                    type="submit"
                    className="button"
                    disabled={isButtonDisabled} // Tugma faolligini boshqarish
                >
                    {isButtonDisabled ? 'Iltimos, 40 soniya kuting...' : 'SMS yuborish'}
                </button>
            </form>
        </div>
    );
};

export default VipSMSNumberSender;
