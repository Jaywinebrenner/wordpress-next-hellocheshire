import Link from 'next/link';

//use conditional wrapper to add Link tag only if url is present
const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
}

const Button = ({
  text,
  href,
  type = 'default',
  disabled = false,
  onClick,
  outbound = false,
  active
}) => {
  const renderButton = () => {
    const TagType = href ? 'a' : 'button';

    switch (type) {
      case 'hr':
        return (
          <div className="hr-button">
            <ConditionalWrapper condition={href} wrapper={children => <Link href={href}>{children}</Link>}>
              <TagType className="btn" disabled={disabled} {...outbound ? { target: '_blank', rel: 'noopener noreferrer' } : {}} onClick={() => onClick ? onClick() : null}><span>{text}</span></TagType>
            </ConditionalWrapper>
          </div>);
      case 'link':
        return (
          <ConditionalWrapper condition={href} wrapper={children => <Link href={href}>{children}</Link>}>
            <TagType className="link" disabled={disabled} {...outbound ? { target: '_blank', rel: 'noopener noreferrer' } : {}} onClick={() => onClick ? onClick() : null}><span>{text}</span></TagType>
          </ConditionalWrapper>
        )
      default:
        return (
          <ConditionalWrapper condition={href} wrapper={children => <Link href={href}>{children}</Link>}>
            <TagType className={`btn ${active ? 'active' : ''}`} disabled={disabled} {...outbound ? { target: '_blank', rel: 'noopener noreferrer' } : {}} onClick={() => onClick ? onClick() : null}><span>{text}</span></TagType>
          </ConditionalWrapper>
        )
    }
  }
  return renderButton();
};

export default Button;