import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Why deploy on IC',
        description:
        'Deploying an Application on the Internet Computer is easy and cheaper to maintain.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
        'When making request to external services, all nodes in the subnetwork must have the same result for authenticity.',
        icon: LockClosedIcon,
    },
    {
        name: 'Cycles',
        description:
        'In order to host your Application on the Internet Computer you need to have cycles.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security',
        description:
        'Application is on the Internet Computer is run on Cryptography that means you do not have to worry about adding firewall.',
        icon: FingerPrintIcon,
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
               Benefits for deploying on the Internet Computer. 
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
    )
}
