import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";

const ContactArch = () => {
  const messageRef = React.useRef(null);

  const [errors, setErrors] = useState({
    email: "",
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validador = (inputs) => {
    let validations = {};
    const emailExpresion =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!inputs.email) {
      validations.email = "Debe ingresar su email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = "Ingrese un email válido";
    }
    return validations;
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    const errores = validador({ ...input, [e.target.name]: e.target.value });
    setErrors(errores);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b1iehaj",
        "template_4r0vr5f",
        e.target,
        "79IlDKtm0gTelc8ZY"
      )
      .then((res) => {
        console.log(res),
          (error) => {
            console.log(error);
          };
      });

    messageRef.current.innerText =
      "Su mensaje fue enviado correctamente. Nos estaremos contactando con usted a la brevedad.";

    setTimeout(() => {
      messageRef.current.innerText = "";
    }, 3000);

    setInput({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section
      id="contact-arch"
      className="contact-sec style2 section-padding position-re bg-img"
      style={{ backgroundImage: "" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3
                style={{ fontSize: "40px", color: "#386488" }}
                className="wow fadeIn"
                data-wow-delay=".3s"
              >
                Contacto
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik>
                <Form onSubmit={sendEmail} autoComplete="off" id="contact-form">
                  <div className="messages" ref={messageRef}></div>
                  <br />

                  <div className="controls">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            value={input.name}
                            placeholder="Nombre Completo"
                            required="required"
                            onChange={(e) => handleOnChange(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <Field
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => handleOnChange(e)}
                            value={input.email}
                          />
                          {errors.email ? <div>{errors.email}</div> : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Mensaje"
                            rows="4"
                            required="required"
                            onChange={(e) => handleOnChange(e)}
                            value={input.message}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <button
                            type="submit"
                            className="nb butn light mt-30 full-width"
                          >
                            <span className="ls3 text-u">Enviar Mensaje</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArch;
