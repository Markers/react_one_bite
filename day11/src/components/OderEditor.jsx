
import { useState } from "react";


const OrderEditor = () => {


    const [ menuState, setMenuState ] = useState("족발");
    const [ addressState, setAddressState ] = useState("");
    const [ requestState, setRequestState ] = useState("");

    const onChangeMenu = (event) => {
        setMenuState(event.target.value);
        console.log(menuState);
        
    }

    const onChangeAddress = (event) => {
        setAddressState(event.target.value);
        console.log(addressState);
    } 

    const onChangeRequest = (event) => {
        setRequestState(event.target.value);
        console.log(requestState);
    }

    const onSubmit = () => {
        alert(`주문이 완료되었습니다. 메뉴 ${menuState}, 주소: ${addressState}, 요청사항 : ${requestState}`);
    }



    return (
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <h2>배달의민족 주문</h2>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            메뉴 선택
          </div>
          <select style={{ width: 300, padding: 5 }} onChange={onChangeMenu}>
            <option value={"족발"}>족발</option>
            <option value={"떡볶이"}>떡볶이</option>
            <option value={"아이스크림"}>아이스크림</option>
            <option value={"샐러드"}>샐러드</option>
          </select>
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 주소
          </div>
          <input
            style={{ width: 300, padding: 5 }}
            placeholder="주소) 서울특별시 xx동 .."
            onChange={onChangeAddress}
          />
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 요청사항
          </div>
          <textarea
            style={{ width: 300, padding: 5 }}
            placeholder="배달 요청사항을 써 주세요..."
            onChange={onChangeRequest}
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            style={{ width: 300, padding: 5 }}
          >
            주문 완료
          </button>
        </div>
      </div>
    );
  };

export default OrderEditor;