import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../@/components/ui/breadcrumb";

type Step = {
  label: string;
  component: React.ReactNode;
};

interface CheckoutNavigatorProps {
  activeStep: number;
}

function CheckoutNavigator ({ activeStep } : CheckoutNavigatorProps){
  const steps: Step[] = [
    { label: "საკონტაქტო ინფორმაცია", component: <span>საკონტაქტო ინფორმაცია</span> },
    { label: "მიტანა", component: <span>მიტანა</span> },
    { label: "გადახდა", component: <span>გადახდა</span> },
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {steps.map((step, index) => (
          <BreadcrumbItem key={index}>
            {index === activeStep ? (
              <BreadcrumbPage>{step.label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink as="span">{step.component}</BreadcrumbLink>
            )}
            {index < steps.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default CheckoutNavigator;
