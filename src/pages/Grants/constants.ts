import {TShadowStepProps} from "../../components/ShadowStep/ShadowStep";
import {TApplyStepProps} from "../../components/ApplyStep/ApplyStep";
import {TDeadlinesProps} from "../../components/Deadlines/Deadlines";

export const steps = [
    {id: 1, title: "Overcoming limitations of Knowledge Graphs"},
    {
        id: 2,
        title: "Transformation of descriptive knowledge into procedural knowledge",
    },
    {id: 3, title: "Transparency of automated reasoning"},
];

export const fundingText = [
    {
        id: 1,
        text: "Noeon Research signs the contract with the grantee or grantee's organization according to the Japanese law.",
    },
    {
        id: 2,
        text: "Grantees can use the funding for salaries, business trips, renting computational powers etc.",
    },
    {
        id: 3,
        text: "Up to 10% of the grant could be used to cover indirect costs to those who work for academic organizations.",
    },
    {
        id: 4,
        text: "Minimal amount of money per grant is $50k, and there is no top limit.",
    },
];

export const shadowSteps: TShadowStepProps[] = [
    {
        number: "01",
        title: "Result Presentation",
        text: "Grant results are presented in a report with appendices that could consist of source code, datasets, diagrams etc."
    },
    {number: "02", title: "English Only", text: "All communications and results must be in English."},
    {
        number: "03",
        title: "Non-exclusive license",
        text: "Noeon Research acquires a non-exclusive license to exploit, modify and further develop all outputs from the research project without any limitations."
    },
    {
        number: "04",
        title: "Funding Information",
        text: "If you publish results in an article, you must mention that the results were obtained in a Noeon's funded research."
    }
]

export const applyStep: TApplyStepProps[] = [
    {
        number: "1",
        title: "Write to us",
        text: "Write to us about your background, chosen topic, what people you want on your team, and how you plan to distribute funds. You can keep it simple."
    },
    {
        number: "2",
        title: "Include links",
        text: "Feel free to include links to related articles or other materials."
    },
    {
        number: "3",
        title: "Wait for result",
        text: "We will contact you within a week to discuss further details."
    },
]

export const dedlines: TDeadlinesProps[] = [{
    number: '1',
    text: 'We have no deadlines or competition among participants.'
}, {
    number: '2',
    text: 'We are not looking for a complete application, but instead for a dialogue on how both Noeon and you could benefit from this work.'
}]