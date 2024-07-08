import { useState, useEffect, ChangeEvent } from "react";
import { useSnackbar } from "notistack";
import { ReviewType, FormReviewType } from "../../types";
import reviewService from "../../services/review";
import { ResponseI } from "../../api";

interface UseReviewI {
  postReview: () => Promise<void>;
  reviews: ReviewType[];
  isReviewsLoading: boolean;
  isPostReviewLoading: boolean;
  formReview: FormReviewType;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStarRatingChange: (event: any, newValue: number) => void;
}

const useReview = (productId: string): UseReviewI => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [formReview, setFormReview] = useState<FormReviewType>({
    content: "",
    rate: 1,
  });
  const [isReviewsLoading, setIsReviewsLoading] = useState<boolean>(false);
  const [isPostReviewLoading, setIsPostReviewLoading] =
    useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormReview({ ...formReview, [e.target.name]: e.target.value });
  };

  const handleStarRatingChange = (_, newValue: number) => {
    setFormReview({ ...formReview, rate: newValue });
  };

  const postReview = async () => {
    try {
      setIsPostReviewLoading(true);
      const response = await reviewService.getReviews(productId);

      if (response.status === 200) {
        if (response.data.result !== null) setReviews(response.data.result);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.response.data.message);
    } finally {
      setIsPostReviewLoading(false);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsReviewsLoading(true);
        const response: ResponseI = await reviewService.getReviews(productId);
        console.log(response);
        if (response.status === 200) {
          if (response.data.result !== null) {
            setReviews(response.data.result);
          }
        }
      } catch (err) {
        enqueueSnackbar(err.response.data.message, { variant: "error" });
        console.log(err);
      } finally {
        setIsReviewsLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);
  return {
    reviews,
    formReview,
    postReview,
    isReviewsLoading,
    isPostReviewLoading,
    handleChange,
    handleStarRatingChange,
  };
};

export type { UseReviewI };
export default useReview;
