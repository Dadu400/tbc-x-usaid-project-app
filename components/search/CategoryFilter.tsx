import { useTranslations } from 'next-intl';

function CategoryFilter() {
    const t = useTranslations("Categories");
    return (
        <div className="text-sm flex flex-col gap-[5px]">
            <span className="cursor-pointer ml-[10px] hover:font-semibold hover:text-[#EC6652]">- {t('actionFigures')}</span>
            <span className="cursor-pointer ml-[10px] hover:font-semibold hover:text-[#EC6652]">- {t('buildingSets')}</span>
            <span className="cursor-pointer ml-[10px] hover:font-semibold hover:text-[#EC6652]">- {t('dolls')}</span>
            <span className="cursor-pointer ml-[10px] hover:font-semibold hover:text-[#EC6652]">- {t('educational')}</span>
            <span className="cursor-pointer ml-[10px] hover:font-semibold hover:text-[#EC6652]">- {t('puzzles')}</span>
            <span className="cursor-pointer ml-[10px] hover:font-semibold hover:text-[#EC6652]">- {t('outdoorPlay')}</span>
            <span className="cursor-pointer ml-[10px] hover:font-semibold hover:text-[#EC6652]">- {t('plushToys')}</span>
        </div>
    )
}

export default CategoryFilter;