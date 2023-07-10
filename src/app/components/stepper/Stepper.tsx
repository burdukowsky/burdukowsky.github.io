import { FC, ReactNode, useState } from 'react';

import { Space } from '../space/Space';
import { StepperButton } from './components/stepper-button/StepperButton';

export interface StepperStep {
  title: string;
  content: ReactNode;
}

interface Props {
  steps: StepperStep[];
}

export const Stepper: FC<Props> = ({ steps }) => {
  const [selected, setSelected] = useState(steps[0]);

  return (
    <Space direction='column' gap='1em'>
      <Space justifyContent='space-between' gap='10px' wrap>
        {steps.map((step, index) => {
          return (
            <StepperButton
              key={index}
              active={step === selected}
              onClick={() => setSelected(step)}
            >
              {step.title}
            </StepperButton>
          );
        })}
      </Space>
      {selected != null && selected.content}
    </Space>
  );
};
