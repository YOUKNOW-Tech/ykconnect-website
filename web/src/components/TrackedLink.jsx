// Drop-in replacement for a plain <Link>/<a> that also fires an analytics
// click event. Mirrors Btn's internal/external/mailto/anchor branching
// (see brand.jsx) for call sites that render their own link markup instead
// of using <Btn>.
import { Link } from 'react-router-dom';
import { isInternal, classifyLink } from './brand.jsx';
import { trackEvent } from '../lib/analytics.js';

export function TrackedLink({ to, children, trackLabel, trackProps, eventName = 'CTA Clicked', onClick, ...rest }) {
  const handleClick = (e) => {
    trackEvent(eventName, {
      label: trackLabel || (typeof children === 'string' ? children : null) || to || null,
      destination: to || null,
      link_type: classifyLink(to),
      ...trackProps,
    });
    onClick?.(e);
  };

  if (isInternal(to)) {
    return <Link to={to} onClick={handleClick} {...rest}>{children}</Link>;
  }
  return <a href={to} onClick={handleClick} {...rest}>{children}</a>;
}
