import React from 'react'
import GooglePayButton from '@google-pay/button-react';
const Gpay = () => {
  return (
    <div><GooglePayButton
    environment='TEST'
    paymentRequest={
      {
        apiVersion:2,
        apiVersionMinor:0,
        allowedPaymentMethods:[
          {
            type: 'CARD',
            parameters:{
             allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
             allowedCardNetworks: ['VISA','MASTERCARD']
            },
            tokenizationSpecification:{
              type:'PAYMENT_GATEWAY',
              parameters:{
                gateway: 'example',
                gateMerchantId: 'exmapleGatewayMerchantId'
              }
            }
          }
        ],
        merchantInfo:{
          merchantId:'123456789',
          merchantName: 'rahul'
        },
        transactionInfo:{
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '1.00',
          currencyCode: 'INR',
          countryCode: 'IN',
        },
        shippingAddressRequired:false,
        callbackIntents:['PAYMENT_AUTHORIZATION']
      }
    } 
    onLoadPaymentData={paymentRequest => {
      console.log('load payment data', paymentRequest);
    }}

    onPaymentAuthorized={paymentData =>{
      console.log('payment authorized sucess', paymentData)
      return {transactionState:'SUCCESS'}
    }}
    existingPaymentMethodRequired='false'
    // buttonColor='black'
    buttonType='book'
    

    />
    
    </div>
  )
}

export default Gpay