import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ title, children, className = '', style }: CardProps) {
  return (
    <div className={`card ${className}`} style={style}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

interface AlertProps {
  type: 'warn' | 'info' | 'success';
  icon?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function Alert({ type, icon, children, style }: AlertProps) {
  return (
    <div className={`alert alert-${type}`} style={style}>
      {icon && <span>{icon}</span>}
      <div>{children}</div>
    </div>
  );
}

interface RowProps {
  label: string;
  value: string | ReactNode;
  highlight?: boolean;
  total?: boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export function Row({ label, value, highlight, total, style, children }: RowProps) {
  const className = [
    'row',
    highlight && 'hl',
    total && 'total'
  ].filter(Boolean).join(' ');

  return (
    <div className={className} style={style}>
      <span className="lbl">{label}</span>
      {children || <span className="val">{value}</span>}
    </div>
  );
}

interface ResultsProps {
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function Results({ title, children, style }: ResultsProps) {
  return (
    <div className="results" style={style}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

interface FormGroupProps {
  label: string;
  hint?: string;
  children: ReactNode;
}

export function FormGroup({ label, hint, children }: FormGroupProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {children}
      {hint && <div className="hint">{hint}</div>}
    </div>
  );
}

interface InputWrapProps {
  prefix?: string;
  suffix?: string;
  children: ReactNode;
}

export function InputWrap({ prefix, suffix, children }: InputWrapProps) {
  return (
    <div className={`input-wrap ${suffix ? 'has-suf' : ''}`}>
      {prefix && <span className="pre">{prefix}</span>}
      {children}
      {suffix && <span className="suf">{suffix}</span>}
    </div>
  );
}

interface StepProps {
  num: number;
  title: string;
  description: string;
}

export function Step({ num, title, description }: StepProps) {
  return (
    <div className="step">
      <div className="step-num">{num}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

interface LenderCardProps {
  type: string;
  name: string;
  description: string;
  url: string;
}

export function LenderCard({ type, name, description, url }: LenderCardProps) {
  return (
    <div className="lcard">
      <span className="ltype">{type}</span>
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit Website →</a>
    </div>
  );
}

interface StatusItemProps {
  status: '' | 'wip' | 'done';
  title: string;
  note: string;
  onClick: () => void;
}

export function StatusItem({ status, title, note, onClick }: StatusItemProps) {
  const className = ['stat-item', status].filter(Boolean).join(' ');
  const checkContent = status === 'done' ? '✓' : status === 'wip' ? '●' : '';

  return (
    <div className={className} onClick={onClick}>
      <div className="stat-chk">{checkContent}</div>
      <div>
        <div className="stat-title">{title}</div>
        <div className="stat-note">{note}</div>
      </div>
    </div>
  );
}

interface SpecProps {
  value: string;
  label: string;
}

export function Spec({ value, label }: SpecProps) {
  return (
    <div className="spec">
      <div className="spec-val">{value}</div>
      <div className="spec-lbl">{label}</div>
    </div>
  );
}
