import { useState, useRef } from 'react';
import { FormattedProgram } from "../../App";
import "./styles.css";

export const Carousel = ({ items }: { items: FormattedProgram[] }) => {
    const [xOffset, setXOffset] = useState(0);
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const carouselContentRef = useRef<HTMLDivElement>(null);

    const slideLeft = () => {
        setXOffset((currentXOffSet) => {
            return currentXOffSet < 0 ? currentXOffSet + 280 : currentXOffSet;
        })
    }

    const slideRight = () => {
        const carouselContentWidth = carouselContentRef.current?.clientWidth;
        const carouselWrapperWidth = carouselWrapperRef.current?.clientWidth;

        if (!carouselContentWidth || !carouselWrapperWidth) {
            return;
        }

        const maxOffset = carouselContentWidth - carouselWrapperWidth;


        setXOffset((currentXOffSet) => {
            return currentXOffSet > -maxOffset ? currentXOffSet - 280 : currentXOffSet;
        })
    }

    return (
        <div className="carousel-wrapper" ref={carouselWrapperRef}>
            <div className="carousel-content" style={{ transform: `translateX(${xOffset}px)` }} ref={carouselContentRef}>
                {items.map((item) => (
                    <div className="program-thumbnail-wrapper">
                        <div className="program-thumbnail">
                            <img src={item.thumbnailUrl} alt="" width="100%" />
                            <div className="program-thumbnail-add" />
                        </div>
                        <p className="program-name">{item.programName}</p>
                    </div>
                ))}                
            </div>
            <div className="carousel-prev-arrow" onClick={slideLeft} />
            <div className="carousel-next-arrow" onClick={slideRight} />
        </div>
    );
}