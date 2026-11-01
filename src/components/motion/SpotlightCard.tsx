"use client";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Simple elevated panel — kept lightweight after UI cleanup */
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  return <div className={`panel panel-hover ${className}`}>{children}</div>;
}
