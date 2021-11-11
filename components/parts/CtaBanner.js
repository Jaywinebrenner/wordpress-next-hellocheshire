import Link from 'next/link'

export default function CtaBanner({buttonLink, buttonText, content}) {

    return (
        <div className="cta-banner">
            <Link href={buttonLink}>
                <a className="cta-banner__button">{buttonText}</a>
            </Link>

            <Link href={buttonLink}>
                <a className="cta-banner__button--red">{buttonText} Part 2</a>
            </Link>

            <div dangerouslySetInnerHTML={{ __html: content}}/>
        </div>
    )
  }