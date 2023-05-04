import React from "react";
import axios from "../../lib/fetch";
import { useState } from "react";
import { isValidIsraeliPhone, validateEmail } from "../../utils/validation";
import FormSuccess from "./FormSuccess";
type Props = {};

const inputStyle =
  "bg-inherit border-borderGrey border-0 border-b-[1px] border-solid text-xs focus:outline-0 pb-[.5rem] placeholder:opacity-70 md:h-full md:text-darkGrey md:placeholder:opacity-100 md:text-lg ";
const invalidInputStyle =
  "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500";
export default function Form({}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mailingList, setMailingList] = useState("false");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTouched, setIsTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    mailingList: false,
  });
  // check if there is first and lastName
  const isFullNameValid =
    isTouched.fullName && fullName.split(" ").length === 2;
  const isEmailValid = validateEmail(email);
  const isPhoneValid = isValidIsraeliPhone(phone);
  const isMailingListValid = mailingList === "true";
  const isFormValid =
    isMailingListValid && isFullNameValid && isEmailValid && isPhoneValid;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsTouched({
      fullName: true,
      email: true,
      phone: true,
      mailingList: true,
    });
    if (!isFormValid) return;
    const [first_name, last_name] = fullName.split(" ");

    axios
      .post(
        "register",
        {
          first_name,
          last_name,
          phone,
          email,
          MailingList: mailingList,
          birthyear: null,
          company_name: null,
          cupon: null,
          event_type: "register",
          form_type: null,
          founders_lead_name: null,
          free_text: null,
          other: null,
          registered_date: new Date(),
          utm_campaign: null,
          utm_medium: null,
          utm_source: null,
          utm_term: null,
          web_site: null,
          website_origin: null,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setIsSubmitted(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className={`bg-grey ${
        isSubmitted && "bg-white"
      } font-Digibank-Regular flex flex-col p-11  text-right md:w-1/2 md:justify-center md:items-center md:p-0 `}
    >
      {isSubmitted ? (
        <FormSuccess />
      ) : (
        <div>
          <h2 className="text-2xl md:leading-[1.25]  md:text-[2.5rem] 2xl:text-[2.5rem]">
            רוצה לשמוע עוד?
          </h2>
          <p className="opacity-70 leading-5 text-base md:leading-[1.25] md:text-xl 2xl:text-xl">
            משאירים כאן פרטים ונציג שלנו ייצור איתך
            <br />
            קשר עם כל המידע על התנאים המעולים שלנו
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 my-4 md:mt-6 md:gap-8"
          >
            <input
              className={`${inputStyle} ${
                isTouched.fullName && !isFullNameValid && invalidInputStyle
              }`}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="שם מלא"
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, fullName: true }));
              }}
            />
            <input
              className={`${inputStyle} ${
                isTouched.email && !isEmailValid && invalidInputStyle
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="מייל"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, email: true }));
              }}
            />
            <input
              className={`${inputStyle} ${
                isTouched.phone && !isPhoneValid && invalidInputStyle
              }`}
              type="tel"
              name="phone"
              id="phone"
              placeholder="טלפון נייד"
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, phone: true }));
              }}
              inputMode="numeric"
            />
            <div
              className={`flex gap-2 items-end outline-none md:items-stretch`}
            >
              <input
                className={`w-4 h-4 md:h-5 md:w-5  accent-pink-500 ${
                  isTouched.mailingList &&
                  !isMailingListValid &&
                  invalidInputStyle
                }`}
                // checked
                onChange={(e) => {
                  setMailingList(e.target.checked.toString());
                }}
                type="checkbox"
                name="agreedSmsEmail"
                id="agreedSmsEmail"
              />
              <label
                className={`text-xs text-darkGrey leading-none md:text-base ${
                  isTouched.mailingList && !isMailingListValid && "text-red-700"
                }`}
                htmlFor="agreedSmsEmail"
              >
                תשלחו לי עדכונים הצעות והטבות במייל וב -{" "}
                <span className="">SMS</span>
              </label>
            </div>
            <button
              type="submit"
              className="font-Digibank-Medium self-center text-white bg-blue rounded-3xl py-2 px-6 w-fit text-sm font-medium md:text-base md:self-start"
            >
              תחזרו אליי
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
