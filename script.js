
  const form = document.getElementById("calculator-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
   
    

    const itemName = document.getElementById("itemName").value;
    const IC = parseFloat(document.getElementById("IC").value);
    const FC = parseFloat(document.getElementById("FC").value);
    const POC = document.getElementById("POC").value;
    const ROE = parseFloat(document.getElementById("ROE").value);
    //const IDR = parseFloat(document.getElementById("IDR").value);
    //const SCFR = parseFloat(document.getElementById("SCFR").value);
    //const ELR = parseFloat(document.getElementById("ELR").value);
    //const GCTR = parseFloat(document.getElementById("GCTR").value);


  // Set values based on itemName
  switch (itemName) {
    case "Jewellry":
    case "Clothing":
    case "Shoes":
    case "Video Game Consoles":
    case "Smart Watches":
      IDR = 20;
      SCFR = 0.3;
      ELR = 0.5;
      GCTR = 15;
      break;

    case "Laptop & Desktop PC's":
    case "Desktop PC's":
    case "Tablet PC's":
    case "Computer Parts":
    case "Computer Accessories":
      IDR = 0;
      SCFR = 0;
      ELR = 0.5;
      GCTR = 15;
      break;

    case "Smart Phones":
      IDR = 20;
      SCFR = 0.3;
      ELR = 0.5;
      GCTR = 25;
      break;

    case "Televisions":
    case "Food Items":
    case "Costume Jewellery":
    case "Synthetic Hair":
    case "Cameras":
    case "Drones":
    case "Audio Equipment":
    case "Household Appliances":
      IDR = 20;
      SCFR = 0.3;
      ELR = 0.5;
      GCTR = 15;
      break;

    case "Auto Parts":
      IDR = 30;
      SCFR = 0;
      ELR = 0.5;
      GCTR = 15;
      break;

    case "Books":
      IDR = 0;
      SCFR = 0;
      ELR = 0.5;
      GCTR = 15;
      break;

    case "Earphones":
      IDR = 0;
      SCFR = 0.3;
      ELR = 0.5;
      GCTR = 15;
      break;
  }



// Set values in input fields

  document.getElementById("IDR").value = IDR;
  document.getElementById("SCFR").value = SCFR;
  document.getElementById("ELR").value = ELR;
  document.getElementById("GCTR").value = GCTR;
   
    
    //const CIF = (IC + FC) + 0.01 * (IC + FC);
    const CIF = IC + FC;
    const CIF_JMD = CIF * ROE;
    const ID = CIF * IDR / 100 * ROE; 
    const SCF = CIF * SCFR / 100 * ROE;
    const CAF = POC === "Personal" ? 2500 : 5000;
    const EL = CIF * ELR /100 * ROE;
    const SD = CIF * ROE >= 5501 ? 100 : 5;
    const GCT = ((CIF_JMD + ID + SCF + CAF + EL) * GCTR) / 100; // 10000
    const Total = ID + SCF + CAF + EL + SD + GCT; 
   

    const SD_JMD = CIF >= 5501 ? 100 : 5;
    const GCT_JMD = (CIF_JMD + ID + SCF + CAF + EL) * GCTR * ROE; 
    const Total_JMD = ID + SCF + CAF + EL + SD + GCT;
    
    document.getElementById("CIF").textContent = CIF.toFixed(2);
    document.getElementById("CIF_JMD").textContent = CIF_JMD.toFixed(2);
    document.getElementById("ID").textContent = ID.toFixed(2);
    document.getElementById("SCF").textContent = SCF.toFixed(2);
    document.getElementById("CAF").textContent = CAF.toFixed(2);
    document.getElementById("EL").textContent = EL.toFixed(2);
    document.getElementById("SD").textContent = SD.toFixed(2);
    document.getElementById("GCT").textContent = GCT.toFixed(2);
    document.getElementById("Total").textContent = Total.toFixed(2);

    document.getElementById("SD_JMD").textContent = SD_JMD.toFixed(2);
    document.getElementById("GCT_JMD").textContent = GCT_JMD.toFixed(2);
    document.getElementById("Total_JMD").textContent = Total_JMD.toFixed(2);
   
  });


// Add event listener for the change event on itemName dropdown

const itemNameDropdown = document.getElementById("itemName");
itemNameDropdown.addEventListener("change", function () {
  const selectedItemName = itemNameDropdown.value;

  
// Trigger the form submission to calculate and update the values
  
form.dispatchEvent(new Event("submit"));
});


// Add event listener for the reset button

const resetButton = document.querySelector("input[type='reset']");
resetButton.addEventListener("click", function () {
  


// Reset input fields and trigger form submission
  form.reset();
  form.dispatchEvent(new Event("submit"));

// Reset output spans

  document.getElementById("CIF").textContent = "";
  document.getElementById("CIF_JMD").textContent = "";
  document.getElementById("ID").textContent = "";
  document.getElementById("SCF").textContent = "";
  document.getElementById("CAF").textContent = "";
  document.getElementById("EL").textContent = "";
  document.getElementById("SD").textContent = "";
  document.getElementById("GCT").textContent = "";
  document.getElementById("Total").textContent = ""; 

});
