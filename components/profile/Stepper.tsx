import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Step {
    label: string;
    completed: boolean;
}

interface StepperProps {
    steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
    return (
        <div className="bg-[#F5F6F6] rounded-lg p-6 flex justify-between items-center">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div className="relative flex flex-col items-center">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${step.completed ? 'bg-green-200' : 'bg-gray-200'
                                }`}
                        >
                            {step.completed && <CheckCircleIcon className="text-green-600" />}
                        </div>
                        <span className="mt-2 text-sm font-semibold text-gray-700">{step.label}</span>
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`flex-grow h-0.5 w-20 bg-${step.completed ? 'green' : 'gray'}-200`} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Stepper;
