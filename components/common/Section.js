export default function Section({ title, children, className, ...props }){
    return (
        <section {...props} className={`${className} py-12 lg:py-16`}>
            <h2 className="lg:text-display-lg text-display-md font-semibold pb-4">{ title }</h2>
            <div className="hr mb-8"></div>
            { children }
        </section>
    )
}