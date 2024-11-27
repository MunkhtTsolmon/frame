import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
export function Card(props) {
  return (
    <div className="frame" key={props.user.id}>
      <div className="name">
        <h3>{props.user.firstName}</h3>
        <h3>{props.user.lastName}</h3>
      </div>
      <div className="footer">
        <p>
          <LuPhone />
          {props.user.phoneNumber}
        </p>
        <p>
          <CiMail />
          {props.user.email}
        </p>
        <p>
          <CiLocationOn />
          {props.user.address}
        </p>
      </div>
      <div className="company">
        <Image src="/Logo.jpg" alt="Company Logo" width={30} height={30} />
        <h3>{props.user.companyName}</h3>
      </div>
    </div>
  );
}
