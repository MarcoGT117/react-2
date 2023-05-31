import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Container from "./components/Container";
import Section from "./components/Section";
import Input from "./components/Input";
import Button from "./components/Button";
import Balance from "./components/Balance";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }
  return Math.round(total);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const App = () => {
  const [balance, setBalance] = useState("");
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    setBalance(formatter.format(val));
  };

  return (
    <div>
      <Container>
        <Section>
          <Formik
            initialValues={{
              deposit: "",
              contribution: "",
              years: "",
              rate: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              deposit: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un número"),
              contribution: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un número"),
              years: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un número"),
              rate: Yup.number()
                .required("Obligatorio")
                .typeError("Debe ser un número")
                .moreThan(0, "Mayor a 0")
                .max(1, "Maximo 1"),
            })}
          >
            <Form>
              <Input name="deposit" label="Deposito inicial" />
              <Input name="contribution" label="Contribucion anual" />
              <Input name="years" label="Años" />
              <Input name="rate" label="Interes estimado" />
              <Button type="submit">Calcular</Button>
            </Form>
          </Formik>
          {balance !== "" ? <Balance>Balance: {balance}</Balance> : null}
        </Section>
      </Container>
    </div>
  );
};

export default App;
