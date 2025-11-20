import React, { useMemo } from 'react';
import { StudyItem } from '../types';

interface DetailPageProps {
  itemId: string;
  items: StudyItem[];
  onBack: () => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ itemId, items, onBack }) => {
  const item = useMemo(() => items.find(i => i.id === itemId), [itemId, items]);

  if (!item) {
    return (
      <div className="error-container">
        <p>記事が見つかりません。</p>
        <button onClick={onBack} className="btn btn-secondary">戻る</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <button onClick={onBack} className="back-link">
        ← 一覧へ戻る
      </button>
      
      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{item.title}</h1>
          <div className="detail-meta">
            <span className="badge large">{item.category}</span>
            <span className="date">
              {new Date(item.createdAt).toLocaleString('ja-JP')}
            </span>
          </div>
        </div>
        <div className="detail-content">
          {item.content}
        </div>
      </div>
    </div>
  );
};