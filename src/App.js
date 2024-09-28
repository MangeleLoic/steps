import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Un array di messaggi da visualizzare in base al passo attuale
const messages = [
  "Learn React ⚛️", // Messaggio per il passo 1
  "Apply for jobs 💼", // Messaggio per il passo 2
  "Invest your new income 🤑", // Messaggio per il passo 3
];

function App() {
  // Stato che tiene traccia del passo attuale (1, 2 o 3)
  const [step, setStep] = useState(1);

  // Stato per determinare se la sezione è aperta o chiusa
  const [isOpen, setIsOpen] = useState(true);

  // Funzione per andare al passo precedente
  function handlePrevious() {
    // Riduce il passo di 1, ma solo se il passo attuale è maggiore di 1
    if (step > 1) setStep(step - 1);
  }

  // Funzione per andare al passo successivo
  function handleNext() {
    // Aumenta il passo di 1, ma solo se è inferiore a 3 (l'ultimo passo)
    if (step < 3) setStep(step + 1);
  }

  // Funzione per alternare l'apertura e la chiusura della sezione
  function handleClose() {
    // Inverte lo stato di `isOpen`, chiudendo o aprendo la sezione
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      {/* Bottone per chiudere/aprire la sezione, utilizza il simbolo &times; per la "X" */}
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {/* Se `isOpen` è true, mostra il contenuto dei passi */}
      {isOpen && (
        <div className="steps">
          {/* Visualizza i numeri dei passi e li evidenzia in base al passo attuale */}
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          {/* Messaggio che cambia in base al passo attuale */}
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          {/* Bottoni per navigare tra i passi */}
          <div className="buttons">
            {/* Bottone per andare al passo precedente */}
            <button className="bg-primary text-light" onClick={handlePrevious}>
              Previous
            </button>
            {/* Bottone per andare al passo successivo */}
            <button className="bg-primary text-light" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

/* 
Spiegazione:
Stati (useState):

step: Tiene traccia del passo corrente (1, 2 o 3).
isOpen: Controlla se la sezione dei passi è visibile o no.
Funzione handlePrevious:

Riduce il passo attuale di uno, ma solo se non è già al passo 1.
Funzione handleNext:

Aumenta il passo attuale di uno, ma solo se non è già al passo 3.
Funzione handleClose:

Inverte il valore di isOpen (aperto/chiuso), facendo sì che la sezione sia nascosta o visibile.
Condizionale ({isOpen && ...}):

Mostra la sezione dei passi solo se isOpen è vero.
Numeri dei passi (step === 1 ? "active" : ""):

Evidenzia il numero del passo corrente con una classe CSS chiamata active.
Messaggi:

I messaggi cambiano dinamicamente in base al passo attuale, scegliendo dal vettore messages.
*/
